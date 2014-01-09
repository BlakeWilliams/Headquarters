class ApiController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :check_token

  private

  def check_token
    render json: { error: 'Invalid auth token' }, status: 401 unless current_user
  end

  def current_user
    token = request.headers['App-Token']
    User.where(token: token).first
  end
  helper_method :current_user
end
