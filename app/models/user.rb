class User < ActiveRecord::Base
  has_secure_password validates: false

  validates :name, presence: true, if: -> { name_changed? }
  validates :password, presence: true, if: -> { password.present? }

  before_create :generate_token

  private

  def generate_token
    begin
      self.token = SecureRandom.hex
    end while self.class.exists?(token: token)
  end
end
