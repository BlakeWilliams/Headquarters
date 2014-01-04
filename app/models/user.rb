class User < ActiveRecord::Base
  has_secure_password validates: false

  validates :name, presence: true, if: -> { name_changed? }
  validates :password, presence: true, if: -> { password.present? }
end
