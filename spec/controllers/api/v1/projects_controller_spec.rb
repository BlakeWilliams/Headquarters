require 'spec_helper'

describe Api::V1::ProjectsController do
  let!(:user) { login_user }

  describe 'GET #index' do
    it 'responds successfully' do
      get :index
      expect(response).to be_success
    end

    it 'assigns users projects' do
      3.times { create(:project, user: user) }

      get :index
      expect(assigns(:projects)).to eq(user.projects)
    end

    it 'does not assign projects not owned by user' do
      project = create(:project)

      get :index
      expect(assigns(:projects)).not_to include(project)
    end
  end

  describe 'GET #show' do
    let(:project) { create(:project, user: user) }

    it 'responds successfully' do
      get :show, id: project.id
      expect(response).to be_success
    end

    it 'assigns the project' do
      get :show, id: project.id
      expect(assigns(:project)).to eq(project)
    end
  end

  describe 'POST #create' do
    context 'with valid credentials' do
      it 'responds successfully' do
        post :create, project: attributes_for(:project)
        expect(response).to be_success
      end
j
      it 'creates the project' do
        expect{
          post :create, project: attributes_for(:project)
        }.to change{Project.count}.by(1)
      end

      it 'assigns a user' do
        post :create, project: attributes_for(:project)
        expect(Project.last.user).not_to be_nil
      end
    end

    context 'with invalid credentials' do
      it 'responds with 422' do
        post :create, project: { name: '', description: '' }
        expect(response.status).to be(422)
      end

      it 'renders error json' do
        post :create, project: { name: '', description: '' }
        expect(json['errors']).not_to be_nil
      end

      it 'does not create the project' do
        expect{
          post :create, project: { name: '', description: '' }
        }.not_to change{Project.count}.by(1)
      end
    end
  end
end
