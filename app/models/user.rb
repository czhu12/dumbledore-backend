class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  has_many :posts
  has_many :post_views
  has_many :viewed_posts, :through => :post_views, :source => :post
end
