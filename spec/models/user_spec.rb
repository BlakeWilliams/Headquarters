require 'spec_helper'

describe User do
  it 'has a valid factory' do
    user = FactoryGirl.build(:user)
    expect(user).to be_valid
  end

  it 'generates a token on create' do
    user = FactoryGirl.create(:user);
    expect(user.token).not_to be_nil
  end
end
