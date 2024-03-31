DROP DATABASE IF EXISTS BK_CLOTHES;
CREATE DATABASE BK_CLOTHES;
USE BK_CLOTHES;


CREATE TABLE PRODUCT(
	id VARCHAR(15),
    cat_id INT,
    name VARCHAR(100),
    size VARCHAR(10),
	description varchar(256),
    quantity INT,
    price INT,
    discount FLOAT,
    image varchar(1024)
	PRIMARY KEY (id, size),
    FOREIGN KEY (cat_id) REFERENCES Category(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CHECK (quantity >= 0),
    CHECK (price >= 0)
);
/*
CREATE TABLE COLLECTION(
	ID INT auto_increment primary KEY,
    NAME VARCHAR(30),
    DESCRIPTION TEXT
);
*/

CREATE TABLE Category(
	cat_id INT auto_increment primary KEY,
    name VARCHAR(64)
);
/*
CREATE TABLE RESOURCE(
	ID VARCHAR(30) primary key,
    NAME VARCHAR(100),
    CONTENT TEXT
);
*/
CREATE TABLE CUSTOMER(
	`customer_id` INT AUTO_INCREMENT PRIMARY KEY,
    `FName` varchar(255),
    `LName` varchar(255),
    `phone` varchar(255),
    `email` varchar(255),
    `birthday` date,
    `username` varchar(255),
    `password` varchar(255),
    `address` varchar(255),
    `avatar` varchar(1024),
    PRIMARY KEY (id)
);

CREATE TABLE Admin (
  `id` int AUTO_INCREMENT,
  `FName` varchar(255),
  `LName` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE Order (
	order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    name VARCHAR(20),
    status BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_quantity INT,
    total_price FLOAT,
    payment_method VARCHAR(30),
    phone varchar(16),
    address varchar(128),
    CHECK (total_quantity >0),
    CHECK (total_price > 0),
	FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/*
CREATE TABLE IN_COLLECTION(
	ProductCode VARCHAR(15) PRIMARY KEY,
    CollectID INT NOT NULL,
    FOREIGN KEY (ProductCode) REFERENCES PRODUCT(CODE) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CollectID) REFERENCES COLLECTION(ID) ON DELETE CASCADE ON UPDATE CASCADE
);
*/

CREATE TABLE OrderItem (
    order_id INT,
	product_id VARCHAR(15),
    size VARCHAR(10),
    quantity INT,
    primary key (product_id,SIZE,order_id),
	FOREIGN KEY (product_id,SIZE) REFERENCES PRODUCT(CODE,SIZE) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (order_id) REFERENCES ORDER(order_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Cart(
	product_id VARCHAR(15),
    size VARCHAR(5),
    customer_id INT,
    quantity INT,
    primary key (product_id, size, customer_id),
	FOREIGN KEY (product_id, size) REFERENCES PRODUCT(id, size) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (customer_id) REFERENCES CUSTOMER(customer_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE COMMENT (
	comment_id INT auto_increment PRIMARY KEY,
	product_id VARCHAR(15),
    customer_id INT,
    rating INT,
    created_at TIMESTAMP,
    image TEXT,
    content TEXT,
    parent_id INT, 
    FOREIGN KEY (PARENT_ID) REFERENCES COMMENT(comment_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES PRODUCT(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (customer_id) REFERENCES CUSTOMER(customer_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- DROP DATABASE BK_CLOTHES
-- Category 
INSERT INTO `BK_CLOTHES`.`Category` (`NAME`) VALUES ('Áo khoác nam');
INSERT INTO `BK_CLOTHES`.`Category` (`NAME`) VALUES ('Áo thun nam');
INSERT INTO `BK_CLOTHES`.`Category` (`NAME`) VALUES ('Áo sơ mi nam');
INSERT INTO `BK_CLOTHES`.`Category` (`NAME`) VALUES ('Quần tây nam');

-- customer
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (1, 'Harry', 'Maguire', '0919281930', 'hmaguire@gmail.com', '1970-12-11', 'harrymachai', 'harryhahaha', '242 Manchester United Rd.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fwoman-avatar&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABAJ');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (2, 'Graham', 'Sterling', '0916392019', 'gsterling@gmail.com', '1998-03-07', 'grahamstienlinh', 'sterlingardinho', '123 Chelsea Blvd.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABAc');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (3, 'Harry', 'Kane', '0294909391', 'hkane@gmail.com', '1987-10-13', 'harraykane', 'heineken', '153 Barcelona St.', 'https://www.freepik.com/free-psd/3d-illustration-person-with-sunglasses_27470334.htm#query=avatar&position=0&from_view=keyword&track=sph&uuid=a3b6ba5f-5b0c-489e-84ff-3ba476c47307');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (4, 'Andre', 'Onana', '3891039103', 'aonana@gmail.com', '1980-01-18', 'andreonana', 'ohahahaha', '333 Manchester City Rd.', 'https://www.freepik.com/free-psd/3d-rendering-avatar_70823121.htm#query=avatar&position=12&from_view=keyword&track=sph&uuid=a3b6ba5f-5b0c-489e-84ff-3ba476c47307');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (5, 'Antony', 'Taylor', '9201959100', 'ataylor@gmail.com', '1997-10-19', 'antonytaylor', 'nothinghere', '11 Referee St.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dwoman%2BAvatar&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABAu');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (6, 'Erling', 'Haaland', '9198501022', 'ehaaland@gmail.com', '1998-03-02', 'erlinghaaland', 'haalanderling', '134 Penchester City Blvd.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Favatar-clipart&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABA4');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (7, 'Toni', 'Kross', '3295019015', 'tonikross@gmail.com', '1997-02-01', 'tonikross', 'afmnjksfnasj', '234 Germany St.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvn.lovepik.com%2Fimage-401704859%2Fboy-avatar.html&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABBD');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (8, 'Joe', 'Hart', '9301591050', 'joehart@gmail.com', '1989-08-09', 'joehart', 'joeFART', '2418 Bolobala St.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fman-avatar_5556468&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABBO');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (9, 'Jude', 'Bellingham', '1930598501', 'judebellingham@gmail.com', '1997-05-04', 'juicyham', 'jgiowgwng', '24 Southgate Gareth Rd.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABBZ');
INSERT INTO `CUSTOMER` (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES (10, 'Christiano', 'Ronaldo', '3920550901', 'cr7@messi.com', '1989-04-03', 'christianoronaldo', 'vapcohoipen', '89 Penalty Blvd.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cssscript.com%2Fsvg-avatar-generator%2F&psig=AOvVaw0qPhlG90TyuLA_UwngIsbA&ust=1711937154051000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjF94G1nYUDFQAAAAAdAAAAABBu');

-- admin
INSERT INTO `Admin` (`id`, `FName`, `LName`, `phone`, `email`, `username`, `password`) VALUES (1, 'Teddy', 'Bear', '9019501950', 'teddybear@gmail.com', 'teddy', 'bear');
INSERT INTO `Admin` (`id`, `FName`, `LName`, `phone`, `email`, `username`, `password`) VALUES (2, 'Glory', 'Artemis', '1581050158', 'teamsecret@gmail.com', 'teamsecret', 'vcsdoban');
INSERT INTO `Admin` (`id`, `FName`, `LName`, `phone`, `email`, `username`, `password`) VALUES (3, 'Ren', 'FNC', '1905910500', 'ngairen@gmail.com', 'randomusername', 'randompassword');

-- Product, image taken from https://4menshop.com/quan-ao-nam.html
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`, `name`,`size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('JM190', '1', 'ÁO KHOÁC DÙ PHỐI MÀU AK025 MÀU XANH ĐEN', 'S', 'Áo khoác nam rẻ tiền, sang trọng', '100', '0.41', '385000', 'https://4menshop.com/images/thumbs/2023/04/ao-khoac-du-phoi-mau-ak025-mau-xanh-den-17901-slide-products-643d0c92dd6d8.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('JM091', '1', 'ÁO KHOÁC PHAO REGULAR SỌC NGANG AK050 MÀU ĐEN', 'M', 'Áo khoác phao sọc ngang màu đen', '89', '0.5', '545000', 'https://4menshop.com/images/thumbs/2023/03/ao-khoac-phao-regular-soc-ngang-ak050-mau-den-17801-slide-products-64070f33c48d7.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('JM295', '1', 'ÁO KHOÁC DÙ SURFING FORM REGULAR AK051 MÀU RÊU', 'L', 'Áo khoác dù độc quyền của BK CLOTHES', '26', '0.5', '485000', 'https://4menshop.com/images/thumbs/2023/05/ao-khoac-du-surfing-form-regular-ak051-mau-reu-18000-slide-products-6455ba77498c6.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('TM290', '2', 'ÁO THUN RÃ PHỐI MAY TAG FORM SLIMFIT AT144 MÀU ĐỎ MẬN', 'XS', 'Áo thun được dệt 100% từ vải cotton', '30', '0', '245000', 'https://4menshop.com/images/thumbs/2024/02/ao-thun-theu-still-life-bo-co-kieu-form-slimfit-at143-18400-slide-products-65dd8201a04f4.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('TM291', '2', 'ÁO THUN RÃ PHỐI IN HOME IS FORM REGULAR AT141 MÀU TRẮNG', 'XL', 'Áo thun được dệt 100% từ vải cotton', '42', '0', '275000', 'https://4menshop.com/images/thumbs/2024/01/ao-thun-ra-phoi-in-home-is-form-regular-at141-mau-trang-18365-slide-products-659d096a9961e.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('SM920', '3', 'ÁO SƠ MI SỌC TAY DÀI RÃ PHỐI FORM REGULAR SM143 SỌC TRẮNG', 'XL', 'Áo sơ mi trắng sang trọng, lịch sự', '12', '0', '375000', 'https://4menshop.com/images/thumbs/2023/12/ao-so-mi-soc-tay-dai-theu-4men-form-regular-sm141-soc-den-18317-slide-products-658a49d46768f.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('SM124', '3', 'ÁO SƠ MI TAY DÀI RÃ NGỰC THÊU 4M FORM SLIMFIT SM140 MÀU NÂU', 'L', 'Áo sơ mi nâu sang trọng, lịch sự, giá cả phải chăng', '21', '0.1', '345000', 'https://4menshop.com/images/thumbs/2023/10/ao-so-mi-tay-dai-ra-nguc-theu-4m-form-slimfit-sm140-18313-slide-products-653b2dfbc0a29.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('TRM290', '4', 'QUẦN TÂY NAZAFU LINEN QT1137 MÀU XANH BÍCH', 'XXL', 'Quần tây rẻ tiền với chất liệu được nhập khẩu từ Hoa Kỳ', '40', '0.7', '545000', 'https://4menshop.com/images/thumbs/2023/08/quan-tay-nazafu-linen-qt1137-mau-xanh-bich-18205-slide-products-64ddbf07dcfaf.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('TRM023', '4', 'QUẦN TÂY SIDETAB LƯNG 2 NÚT FORM REGULAR CROPPED QT057', 'M', 'Quần tây sidetab 2 lưng độc quyền của BK CLOTHES', '123', '0', '445000', 'https://4menshop.com/images/thumbs/2023/12/quan-tay-sidetab-form-slim-cropped-qt056-18332-slide-products-658a5e5b4dbc7.jpg');
INSERT INTO `BK_CLOTHES`.`product` (`id`, `cat_id`,`name`, `size`, `description`, `quantity`, `price`, `discount`, `image`) VALUES ('TRM023', '4', 'QUẦN TÂY SIDETAB LƯNG 2 NÚT FORM REGULAR CROPPED QT057', 'L', 'Quần tây sidetab 2 lưng độc quyền của BK CLOTHES', '12', '0', '545000', 'https://4menshop.com/images/thumbs/2023/12/quan-tay-sidetab-form-slim-cropped-qt056-18332-slide-products-658a5e5b4dbc7.jpg');
/*
-- Collection
INSERT INTO `BK_CLOTHES`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('Gửi em', 'Ôm trọn thanh xuân - Đẹp ở mọi vũ trụ!');
INSERT INTO `BK_CLOTHES`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('INSPIRED BY FLOWER', 'Nếu là hoa, em sẽ là bông hoa hạnh phúc!');
INSERT INTO `BK_CLOTHES`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('AGE OF YOUTH', 'Hãy luôn mang theo tuổi trẻ bên mình, bạn sẽ chẳng bao giờ già đi!');
INSERT INTO `BK_CLOTHES`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('WINTER', 'XU HƯỚNG THỜI TRANG THU ĐÔNG HOT NHẤT ĐÃ CÓ MẶT TẠI GU!');
INSERT INTO `BK_CLOTHES`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('FALL STORY', 'Tôn dáng - Tôn da - Tôn cả khí chất của nàng. Bởi vì nàng là món quà của mùa thu...');

-- In collection
INSERT INTO `BK_CLOTHES`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC08097', '1');
INSERT INTO `BK_CLOTHES`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC09062', '1');
INSERT INTO `BK_CLOTHES`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC09063', '2');
INSERT INTO `BK_CLOTHES`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC09071', '2');
INSERT INTO `BK_CLOTHES`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC11098', '3');
INSERT INTO `BK_CLOTHES`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC12067', '3');
*/

-- Order
INSERT INTO `BK_CLOTHES`.`Order` (`order_id`, `customer_id`, `name`, `total_quantity`, `total_cost`, `payment_method`, `phone`, `address`) VALUES ('1', '2', 'La Nguyen Gia Hy', '2', '460000', 'cash', '0389205202', '27 Lý Chính Thắng, TP.HCM');
INSERT INTO `BK_CLOTHES`.`Order` (`order_id`, `customer_id`, `name`, `total_quantity`, `total_cost`, `payment_method`, `phone`, `address`) VALUES ('2', '4', 'Vo Van Kha', '1', '230000', 'momo', '0930269202', '32 Bà Huyện Thanh Quan, quận 8, TP.HCM');
INSERT INTO `BK_CLOTHES`.`Order` (`order_id`, `customer_id`, `name`, `total_quantity`, `total_cost`, `payment_method`, `phone`, `address`) VALUES ('3', '5', 'Nguyen Chau Long', '1', '240000', 'cash', '0293602060', '102 Hàm Nghi, phường 5, quận Gò Vấp, TP.HCM');
INSERT INTO `BK_CLOTHES`.`Order` (`order_id`, `customer_id`, `name`, `total_quantity`, `total_cost`, `payment_method`, `phone`, `address`) VALUES ('4', '6', 'Le Hong Phuc', '1', '200000', 'cash', '0290629603', '123 Huỳnh Thiện Lộc, Phú Nhuận, TP.HCM');
INSERT INTO `BK_CLOTHES`.`Order` (`order_id`, `customer_id`, `name`, `total_quantity`, `total_cost`, `payment_method`, `phone`, `address`) VALUES ('5', '7', 'Cristiano Messi', '2', '500000', 'bank', '0122204268', '42A Lê Trọng Tấn, Bình Thạnh, TP.HCM');

-- OrderItem
INSERT INTO `BK_CLOTHES`.`OrderItem` (`order_id`, `product_id`, `size`, `quantity`) VALUES ('1','JM190','S','2');
INSERT INTO `BK_CLOTHES`.`OrderItem` (`order_id`, `product_id`, `size`, `quantity`) VALUES ('1','JM091','M','1');
INSERT INTO `BK_CLOTHES`.`OrderItem` (`order_id`, `product_id`, `size`, `quantity`) VALUES ('2','TM290','XS','1');
INSERT INTO `BK_CLOTHES`.`OrderItem` (`order_id`, `product_id`, `size`, `quantity`) VALUES ('3','TM291','XL','1');
INSERT INTO `BK_CLOTHES`.`OrderItem` (`order_id`, `product_id`, `size`, `quantity`) VALUES ('4','TRM290','XXL','1');
INSERT INTO `BK_CLOTHES`.`OrderItem` (`order_id`, `product_id`, `size`, `quantity`) VALUES ('5','TRM023','L','3');

-- comment
INSERT INTO `BK_CLOTHES`.`comment` (`comment_id`, `product_id`, `customer_id`, `RATING`, `created_at`, `content`) VALUES ('1', 'SM920', '2', '5', '2024-04-01', 'Mặt hàng này rất tốt, giả cả phù hợp');
INSERT INTO `BK_CLOTHES`.`comment` (`comment_id`, `product_id`, `customer_id`, `RATING`, `created_at`, `content`) VALUES ('2', 'SM124', '4', '3', '2024-04-04', 'Sản phẩm bị bạc màu sau khi giặt');
INSERT INTO `BK_CLOTHES`.`comment` (`comment_id`, `product_id`, `customer_id`, `RATING`, `created_at`, `content`) VALUES ('3', 'TRM023', '5', '5', '2024-05-02', 'Sản phẩm chất lượng, sẽ mua lại vào lần sáu');

-- add-to-cart
INSERT INTO `BK_CLOTHES`.`Cart` (`product_id`,`size`, `customer_id`,`quantity`) VALUES ('JM190','S' ,'4','1');
INSERT INTO `BK_CLOTHES`.`Cart` (`product_id`,`size`, `customer_id`,`quantity`) VALUES ('JM091','M' ,'1','1');
INSERT INTO `BK_CLOTHES`.`Cart` (`product_id`,`size`, `customer_id`,`quantity`) VALUES ('TM290','XS' ,'2','2');
INSERT INTO `BK_CLOTHES`.`Cart` (`product_id`,`size`, `customer_id`,`quantity`) VALUES ('TM290','XL' ,'2','2');
INSERT INTO `BK_CLOTHES`.`Cart` (`product_id`,`size`, `customer_id`,`quantity`) VALUES ('TRM023','L' ,'3','2');
INSERT INTO `BK_CLOTHES`.`Cart` (`product_id`,`size`, `customer_id`,`quantity`) VALUES ('TRM023','M' ,'5','1');

/*
-- resource
INSERT INTO `BK_CLOTHES`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('1', 'Rớt nước mắt trước tâm thư của nhân viên gửi sếp giữa tâm dịch', 'Trong thư, cô gái bày tỏ lời biết ơn sâu sắc tới sếp vì sự tử tế và tình yêu thương đã luôn hỗ trợ và đồng hành cùng mình trong suốt chặng đường qua. Đồng thời, công ty cũng là chỗ dựa vững chắc cho mình và các đồng nghiệp tại thời điểm khó khăn chung của nền kinh tế. ');
INSERT INTO `BK_CLOTHES`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('2', 'Dáng người tam giác ngược là như thế nào?', 'Dáng tam giác ngược được định nghĩa sẽ là những người có vóc dáng ở phần vai, phần ngực bị thiếu cân đối so với tổng thể của body, dáng người này phần thân dưới sẽ nhỏ hơn phần thân trên. Thường những người sở hữu vóc dáng này sẽ cần trải qua một quá trình tập luyện để cơ thể có thể săn chắc như mong muốn, đặc điểm cụ thể');
INSERT INTO `BK_CLOTHES`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('3', 'Nguyên tắc phối đồ cho người có dáng tam giác ngược', 'Vì là dáng người tam giác ngược nên thường sẽ có tỉ lệ cơ thể hơi thô và không đều nhau. Cho nên, khi chúng ta phối đồ hay lựa chọn trang phục cần phải xem xét tổng thể  để cân bằng được ở phần thân trên lẫn thân dưới. Một mẹo nhỏ để bạn có thể thực hiện việc này là nên tập luyện ở phần thân dưới để có đường cong để tạo phần eo, giúp thân hình trong cân đối hơn. Sau đây GUMAC  sẽ dành hai gợi ý dành cho bạn.');
INSERT INTO `BK_CLOTHES`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('4', 'Gợi ý tip phối đồ cho dáng tam giác ngược', 'Phối đồ theo dáng người tam giác ngược theo kiểu đúng đắn sẽ có thể tạo được sự cân đối cho cơ thể của các bạn. Tuy nhiên, bạn cũng phải cần thật cân nhắc trước khi lựa chọn các trang phục phù hợp để cân đối cho cả dáng người trên và dưới, sau đây GUMAC sẽ gợi ý cho các bạn một số kiểu phối đồ phù hợp.');
INSERT INTO `BK_CLOTHES`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('5', 'Phụ kiện phối đẹp cho dáng người tam giác ngược', 'Cuối cùng, sau khi GUMAC đã gợi ý một vài kiểu phối đồ dành cho bạn thì sẽ là những phụ kiện, trang sức phù hợp với các nàng có dáng người tam giác. Đa số, bạn có thể chọn bất kỳ loại phụ kiện hay trang sức nào bạn thích nhưng để nhìn với trang phục dễ nhìn, thu hút, không lố lăng thì chúng ta nên tránh lựa chọn những trang sức chẳng hạn như: Vòng có kích thước lớn và nhiều chi tiết gây rối mắt hoặc những chiếc khăn quấn không cần thiết làm bạn sẽ trông luộm thuộm. Lựa chọn hoa tai cỡ to hoặc hoa tai dài cũng là một lựa chọn thông minh sẽ giúp gương mặt chúng ta trông thon gọn hơn, kết hợp cùng vòng tay cỡ nhỏ màu bạc giúp chúng ta trông sành điệu hơn rất nhiều.');
*/