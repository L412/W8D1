class Api::SessionsController < ApplicationController 
  # before_action :ensure_session_token
  # do we still need this here since we're on a single page app?

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.save
      login(@user)
      render "api/users/show"
    else 
      render json: ['Invalid login credentials'], status: 404
    end
  end
  
  def destroy
    @user = current_user
    if @user 
      logout
      render json: {}
    else 
      render json: ["Nobody is logged in!"], status: 404
    end
  end

end