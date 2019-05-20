class HomeController < ApplicationController
  def index
    @body = Post.first.body
  end
end
