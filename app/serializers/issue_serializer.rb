class IssueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :closed

  has_one :project, embed: :id
end
