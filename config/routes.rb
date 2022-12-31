Rails.application.routes.draw do
  resources :perscription, only: [:index]
  resources :departments, only: [:index]
  resources :doctors, only: [:index, :show]
  resources :patients, only: [:index, :show, :create, :destroy]
  resources :appointments


  post '/doclogin', to: 'sessions#doclogin'
  post '/patientlogin', to: 'sessions#patientlogin'
  delete '/logout', to: 'sessions#logout'
end
