class Api::V1::UsersController < ApiController
  def show
    @user = current_user if params[:id] == 'me'
    @user ||= User.find(params[:id])

    render json: @user
  end
end
