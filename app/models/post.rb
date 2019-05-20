class Post < ApplicationRecord
  belongs_to :user

  has_many :post_views
  has_many :viewers, :through => :post_views, :source => :user
end
