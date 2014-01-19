require 'spec_helper'

describe Issue do
  it 'has a valid factory' do
    issue = build(:issue)
    expect(issue).to be_valid
  end
end
