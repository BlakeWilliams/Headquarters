require 'spec_helper'

describe Api::V1::UsersController do
  describe 'GET #show' do
    let(:user) { FactoryGirl.create(:user) }

    it 'returns success' do
      get :show, id: user.id
      expect(response).to be_success
    end

    it 'assigns the user' do
      get :show, id: user.id
      expect(assigns(:user)).to eq user
    end
  end
end
