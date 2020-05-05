# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# データベース設計

## users
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
has_many :messeages
has_many :groups, through: :authorizations
has_many :authorizations

## groups
|Column|Type|Options|
|------|----|-------|
|team|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
has_many :users, through: :authorizations
has_many :authorizations
has_many :comments

## authorizations
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
belongs_to :user
belongs_to :group

## messages
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|
|date|datetime|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
belongs_to :user
belongs_to :group