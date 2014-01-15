require 'spec_helper'

describe Api::V1::UsersController do
  before { login_user }

  describe 'GET #show' do
    let(:user) { create(:user) }

    it 'returns success' do
      get :show, id: user.id
      expect(response).to be_success
    end

    it 'assigns the user' do
      get :show, id: user.id
      expect(assigns(:user)).to eq user
    end

    context 'when id is me' do
      let!(:user) { login_user }

      it 'returns the current user' do
        get :show, id: 'me'
        expect(assigns(:user)).to eq user
      end
    end

  end
end
