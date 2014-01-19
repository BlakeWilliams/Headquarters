class Issue < ActiveRecord::Base
  belongs_to :project

  validates :name, presence: true
  validates :project, associated: true
end
