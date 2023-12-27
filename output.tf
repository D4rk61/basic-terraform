# output

output "ec2_public_ip" {
  description = "IP publica de la instancia Ec2"
  value       = "La IP publica del servidor es: ${aws_instance.public_vm_1.public_ip}"

}

output "ec2_public_user_data" {
  description = "IP publica de la instancia Ec2 haciendo uso de user_data"
  value = "La IP publica del servidor2 es: ${aws_instance.public_vm-2.public_ip}"
  
}