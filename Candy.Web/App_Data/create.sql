create table Settings
(
	Id int primary key identity(1,1),
	Name varchar(64) not null,
	[Value] text,
	Autoload bit
)

create table Category
(
	Id int primary key identity(1,1),
	Name varchar(450) not null,
	[Description] text,
	Category_Id int,
	Slug varchar(450) not null,
	SortOrder int not null default 0,
	IsLocked bit not null default 0
)

create table Permission
(
	Id int primary key identity(1,1),
	Name varchar(150) not null
)
create table Role
(
	Id int primary key identity(1,1),
	RoleName varchar(256) not null
)
create table [User]
(
	Id int primary key identity(1,1),
	UserName varchar(150) not null,
	[Password] varchar(128) not null,
	Email varchar(256) not null,
	PasswordQuestion varchar(256),
	PasswordAnswer varchar(256),
	CreateDate datetime default GETUTCDATE(),
	LastLoginDate datetime default GETUTCDATE(),
	Slug varchar(150),
	[Signature] text,
	Website varchar(256),
	Avatar varchar(256),
	ActivationKey varchar(64)
)
create table UsersInRoles
(
	Id int primary key identity(1,1),
	Role_Id int references [Role](Id),
	[User_Id] int references [User](Id)
)

create table UserMeta
(
	Id int primary key identity(1,1),
	[User_Id] int references [User](Id),
	Meta_Key varchar(255) not null,
	Meta_Value text
)

create table CategoryPermissionForRole
(
	Id int primary key identity(1,1),
	Permission_Id int references Permission(Id),
	Role_Id int references [Role](Id),
	Category_Id int references Category(Id),
	IsTicked bit not null
)

create table Topic
(
	Id int primary key identity(1,1),
	Name varchar(450) not null,
	Slug varchar(450),
	[Views] int default 0,
	IsSticky bit default 0,
	IsLocked bit default 0,
	CreateDate datetime default GETUTCDATE(),
	[User_Id] int references [User](Id),
	Category_Id int references Category(Id)
)
create table Post
(
	Id int primary key identity(1,1),
	PostContent text not null,
	PostType varchar(20) not null,
	IpAddress varchar(50),
	DateCreated datetime default GETUTCDATE(),
	DateEditEd datetime default GETUTCDATE(),
	[User_Id] int references [User](Id),
	Topic_Id int references Topic(Id)
)

create table TopicTag
(
	Id int primary key identity(1,1),
	Tag varchar(100) not null,
	Slug varchar(100) not null
)
create table TagInTopic
(
	Id int primary key identity(1,1),
	Topic_Id int references Topic(Id),
	TopicTag_Id int references TopicTag(Id)
)


select * from Category

select * from Settings

select * from Permission


USE [MVCForum]
GO

/****** Object:  Table [dbo].[Topic_Tag]    Script Date: 2014/4/7 1:08:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Topic_Tag](
	[Id] [uniqueidentifier] NOT NULL,
	[Topic_Id] [uniqueidentifier] NOT NULL,
	[TopicTag_Id] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Topic_Tag] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[Topic_Tag] ADD  CONSTRAINT [DF_Id]  DEFAULT (newsequentialid()) FOR [Id]
GO

ALTER TABLE [dbo].[Topic_Tag]  WITH NOCHECK ADD  CONSTRAINT [FK_Topic_Tag_Topic] FOREIGN KEY([Topic_Id])
REFERENCES [dbo].[Topic] ([Id])
GO

ALTER TABLE [dbo].[Topic_Tag] NOCHECK CONSTRAINT [FK_Topic_Tag_Topic]
GO

ALTER TABLE [dbo].[Topic_Tag]  WITH NOCHECK ADD  CONSTRAINT [FK_Topic_Tag_TopicTag] FOREIGN KEY([TopicTag_Id])
REFERENCES [dbo].[TopicTag] ([Id])
GO

ALTER TABLE [dbo].[Topic_Tag] NOCHECK CONSTRAINT [FK_Topic_Tag_TopicTag]
GO

