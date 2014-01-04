# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    name "Joe"
    sequence(:email) { |n| "foo#{n}@bar.com" }
    password "password"
  end
end
