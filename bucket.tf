
resource "aws_s3_bucket" "proveedores" {
  bucket = "terraform-proveedores-providres"

  tags = {
    Name        = "Terraform-1"
    Environment = "Dev"
    Team        = "DevOps"
    owner       = "Jose"
    managedby   = "Terraform"
    purpose     = "Proveedores"
    createdby   = "Jose"
    updatedby   = "Jose"
    deletedby   = "Jose"
    createdat   = "2022-10-10"
    updatedat   = "2022-10-10"
    deletedat   = "2022-10-10"
  }

}
