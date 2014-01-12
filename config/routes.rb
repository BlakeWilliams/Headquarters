Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :show, :create]
      resources :sessions, only: [:create]
      resources :users, only: [:show]
    end
  end

  root to: 'application#index'
end
