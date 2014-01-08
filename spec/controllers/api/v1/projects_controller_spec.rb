require 'spec_helper'

describe Api::V1::ProjectsController do
  let!(:user) { login_user }

  describe 'GET #index' do
    it 'responds successfully' do
      get :index
      expect(response).to be_success
    end

    it 'assigns users projects' do
      3.times { FactoryGirl.create(:project, user: user) }

      get :index
      expect(assigns(:projects)).to eq(Project.all)
    end
  end

  describe 'GET #show' do
    let(:project) { FactoryGirl.create(:project, user: user) }

    it 'responds successfully' do
      get :show, id: project.id
      expect(response).to be_success
    end

    it 'assigns the project' do
      get :show, id: project.id
      expect(assigns(:project)).to eq(project)
    end
  end
end
