class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :gravatar

  def gravatar
    gravatar = GravatarService.new(object)
    gravatar.url
  end
end
