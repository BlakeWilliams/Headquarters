# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :issue do
    name "Test Issue"
    description "Test Description"
    project
  end
end
