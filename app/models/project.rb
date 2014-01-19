class Project < ActiveRecord::Base
  belongs_to :user
  has_many :issues

  validates :name, presence: true
  validates :description, presence: true
end
