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
	Role_Id int references [Role](Id),
	Slug varchar(150),
	[Signature] text,
	Website varchar(256),
	Avatar varchar(256),
	ActivationKey varchar(64)
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

select * from TopicTag

select * from TagInTopic
