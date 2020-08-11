Rails.application.routes.draw do
  ## 変更
  resources :categories, only: :index
  resources :articles
  root to: 'articles#index'
end
