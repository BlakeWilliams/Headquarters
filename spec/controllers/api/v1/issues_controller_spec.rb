require 'spec_helper'

describe Api::V1::IssuesController, 'GET #index' do
  context 'with valid ids' do
    let!(:user) { login_user }
    let(:project) { create(:project, user: user) }
    let(:issues) {
      [
        create(:issue, project: project),
        create(:issue, project: project)
      ]
    }

    it 'responds successfully' do
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

describe Api::V1::IssuesController, 'GET #show' do
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

describe Api::V1::IssuesController, 'POST #create' do
  context 'with valid params' do
    let!(:user) { login_user }
    let (:issue_params) { attributes_for :issue }

    it 'responds successfully' do
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

describe Api::V1::IssuesController, 'PUT #update' do
  let!(:issue) { create :issue }

  context 'with valid params' do
    let!(:user) { login_user }

    it 'responds successfully' do
      post :update, id: issue.id, issue: { name: 'new name' }

      expect(response).to be_success
    end

    it 'changes the attributes of issue' do
      expect{
        post :update, id: issue.id, issue: { name: 'updated name' }
      }.to change{issue.reload.name}.to 'updated name'
    end
  end

  context 'with invalid params' do
    let!(:user) { login_user }

    it 'responds with 422' do
      post :update, id: issue.id, issue: { name: '' }
      expect(response.status).to be(422)
    end

    it 'does not update the issue' do
      expect{
        post :update, id: issue.id, issue: { name: '' }
      }.not_to change{issue.reload.name}
    end

    it 'renders errors json' do
      post :update, id: issue.id, issue: { name: '' }
      expect(json['errors']).not_to be_nil
    end
  end
end
