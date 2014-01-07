class Api::V1::SessionsController < ApplicationController
  def create
    email = params[:email]
    password = params[:password]
    @user = User.where(email: email).first

    if @user && @user.authenticate(password)
      render json: { token: @user.token }
    else
      render json: { error: 'Username or password is incorrect' }, status: 401
    end
  end
end
