Rails.application.routes.draw do
  resources :ledgers
  resources :locations do
    resources :bikes, only: [:create]
  end
  resources :bikes, except: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
