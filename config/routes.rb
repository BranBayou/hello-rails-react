Rails.application.routes.draw do
  root 'root#index'
 
  namespace :api do
    get '/greeting', to: 'greetings#index'
  end
end
