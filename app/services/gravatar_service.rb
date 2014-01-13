class GravatarService
  def initialize(user)
    @user = user
  end

  def url
    "http://www.gravatar.com/avatar/#{email_digest}"
  end

  private

  def email_digest
    Digest::MD5.hexdigest(@user.email)
  end
end
