Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :issues, only: [:index, :show, :create]
      resources :projects, only: [:index, :show, :create, :update]
      resources :sessions, only: [:create]
      resources :users, only: [:show]
    end
  end

  root to: 'application#index'
end
