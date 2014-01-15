require 'spec_helper'

describe Api::V1::SessionsController do
  let(:user) { create(:user, password: 'password') }

  context "with valid credentials" do
    before do
      post :create, email: user.email, password: 'password'
    end

    it 'returns success' do
      expect(response).to be_success
    end

    it 'returns the users token' do
      expect(json['token']).to eq(user.token)
    end
  end

  context "with invalid credentials" do
    before do
      post :create, email: 'fake', password: 'fake'
    end

    it 'returns 401' do
      expect(response.status).to eq 401
    end

    it 'returns error json' do
      expect(json['error']).not_to be_nil
    end
  end
end
