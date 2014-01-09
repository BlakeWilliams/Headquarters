module LoginHelper
  def login_user(user=FactoryGirl.create(:user))
    @request.headers['App-Token'] = user.token
    user
  end
end

RSpec.configure do |c|
  c.include LoginHelper
end
