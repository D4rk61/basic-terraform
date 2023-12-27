variable "default_zone" {
  description = "zona por defecto"
  type        = string
  default     = "us-east-1"
}


variable "virginia_cidr" {
  description = "CIDR de virginia"
  type        = string
  default     = "10.0.0.0/16"
  sensitive   = true

}

variable "public_subnet_cidr" {

  description = "CIDR de la subnet1"
  type        = string
  default     = "10.0.1.0/24"

}

variable "private_subnet_cidr" {
  description = "CIDR de la subnet2"
  type        = string
  default     = "10.0.2.0/24"

}

variable "subnets" {
  description = "lista de subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]

}

variable "all_ip" {
  description = "all ip"
  type        = string
  default     = "0.0.0.0/0"
}
