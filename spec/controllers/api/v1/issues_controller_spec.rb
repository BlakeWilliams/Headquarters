require 'spec_helper'

describe Api::V1::IssuesController do
  describe 'GET #index' do
    context 'with valid ids' do
      let!(:user) { login_user }
      let(:project) { create(:project, user: user) }
      let(:issues) {
        [
          create(:issue, project: project),
          create(:issue, project: project)
        ]
      }

      it 'responds success' do
        get :index, ids: issues.collect(&:id)

        expect(response).to be_success
      end

      it 'assigns the issues' do
        get :index, ids: issues.collect(&:id)

        expect(assigns(:issues)).to eq issues
      end
    end

    context 'with invalid ids' do
      let!(:user) { login_user }
      let(:issues) {
        [
          create(:issue),
          create(:issue)
        ]
      }

      it 'raises an exception' do
        expect{
          get :index, ids: issues.collect(&:id)
        }.to raise_error
      end
    end
  end

  describe 'GET #show' do
    let!(:user) { login_user }

    context 'with issue belonging to owned project' do
      let(:project) { create(:project, user: user) }
      let(:issue) { create(:issue, project: project) }

      it 'responds success' do
        get :show, id: issue.id

        expect(response).to be_success
      end

      it 'assigns the issue' do
        get :show, id: issue.id

        expect(assigns(:issue)).to eq(issue)
      end
    end

    context 'with issue belonging to unowned project' do
      let(:issue) { create(:issue) }

      it 'raises an exception' do
        expect{
          get :show, id: issue
        }.to raise_error
      end
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      let!(:user) { login_user }
      let (:issue_params) { attributes_for :issue }

      it 'responds success' do
        post :create, issue: issue_params

        expect(response).to be_success
      end

      it 'creates the issue' do
        expect{
          post :create, issue: issue_params
        }.to change{Issue.count}.by 1
      end
    end

    context 'with invalid params' do
      let!(:user) { login_user }

      it 'responds with 422' do
        post :create, issue: { name: '', description: '' }
        expect(response.status).to be(422)
      end

      it 'does not create the issue' do
        expect{
          post :create, issue: { name: '', description: '' }
        }.not_to change{Issue.count}
      end

      it 'renders errors json' do
        post :create, issue: { name: '', description: '' }
        expect(json['errors']).not_to be_nil
      end
    end
  end

end
