require 'spec_helper'

describe Project do
  it 'has a valid factory' do
    project = build(:project)
    expect(project).to be_valid
  end
end
