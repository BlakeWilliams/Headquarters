class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :issues, embed: :ids
end
