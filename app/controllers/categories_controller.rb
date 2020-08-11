class CategoriesController < ApplicationController
  def index
    category = Category.find(params[:category_id])
    ## ーーーーー変更ここからーーーーー
    if category.children.length != 0
      html = render_to_string partial: '/articles/category_form', locals: {categories: category.children, selected: nil}
    else
      html = ""
    end
    ## ーーーーー変更ここまでーーーーー
    render json: {html: html}
  end
end
