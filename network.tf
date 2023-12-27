
resource "aws_vpc" "main" {
  cidr_block = var.virginia_cidr

  tags = {
    Name        = "main"
    Location    = "Virginia"
    Terraform   = true
    Environment = "dev"
    Type        = "public"
    Access      = "public"
    Visibility  = "public"
  }
}

resource "aws_internet_gateway" "igw_infra" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "igw-general"
    Terraform   = "true"
    Environment = "dev"
  }

}
resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.subnets[0]
  map_public_ip_on_launch = true
  depends_on              = [aws_vpc.main]

  tags = {
    Name        = "public_subnet"
    Terraform   = true
    Environment = "dev"
    Location    = "Virginia"
    Type        = "public"
    Access      = "public"
    Visibility  = "public"
  }

}

resource "aws_subnet" "private_subnet" {

  vpc_id     = aws_vpc.main.id
  cidr_block = var.subnets[1]
  depends_on = [aws_vpc.main]

  tags = {
    Name        = "private_subnet"
    Terraform   = true
    Environment = "dev"
    Location    = "Virginia"
    Type        = "private"
    Access      = "private"
    Visibility  = "private"
  }

}

resource "aws_default_route_table" "main_vpc_default" {
  default_route_table_id = aws_vpc.main.default_route_table_id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw_infra.id

  }
}