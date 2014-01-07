require 'spec_helper'

describe User do
  it 'has a valid factory' do
    user = FactoryGirl.build(:user)
    expect(user).to be_valid
  end
end
