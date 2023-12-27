# Desplegando una instancia EC2 en la subnet publica

resource "aws_instance" "public_vm_1" {
  ami = "ami-079db87dc4c10ac91" # Original template
  # ami                         = "ami-07f0ff635093fd048"   # Docker template
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.public_subnet.id
  associate_public_ip_address = true
  key_name                    = data.aws_key_pair.key.key_name

  root_block_device {
    volume_size = "8"
    volume_type = "gp2"
  }

  tags = {
    Name        = "vm_public-1"
    Terraform   = "true"
    Environment = "production"
  }

  vpc_security_group_ids = [
    aws_security_group.infra_sec_group.id
  ]


  lifecycle {
    create_before_destroy = true
    # prevent_destroy = true # No destruira el recurso viejo

    ignore_changes = [
      ami,
      subnet_id,
      associate_public_ip_address,

    ]
  }



  # Programando un provisioner para que se ejecute cuando se crea la instancia

  provisioner "local-exec" {
    command = "echo IP: ${aws_instance.public_vm_1.public_ip} >> ip.txt"
  }


  # Generacion de codigo remoto
  # Como condicion, es tener conectividad 
  # Antes de ejecutar codigo remoto dentro de la instancia

  provisioner "remote-exec" {
    inline = ["sudo yum install nmap -y"]

  }

  # Conexion ssh a la instancia

  connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ec2-user"
    private_key = file("~/.ssh_servers/production_ssh_key.pem")
  }
}


resource "aws_instance" "private_vm_1" {

  ami = "ami-079db87dc4c10ac91" # Original template
  # ami                         = "ami-07f0ff635093fd048"   # Docker template
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.public_subnet.id
  associate_public_ip_address = false

  key_name = data.aws_key_pair.key.key_name

  root_block_device {
    volume_size = "8"
    volume_type = "gp2"
  }

  tags = {
    Name        = "vm_private-1"
    Terraform   = "true"
    Environment = "production"
  }

  vpc_security_group_ids = [
    aws_security_group.infra_sec_group.id
  ]

  # Es como un depends on de docker-compose
  lifecycle {
    replace_triggered_by = [

      aws_subnet.private_subnet
    ]
  }

  provisioner "local-exec" {
    command = "echo IP: ${aws_instance.private_vm_1.private_ip} >> ip2.txt"
  }

}



# Creacion de una instancia EC2 en subnet publica con "user_data"

resource "aws_instance" "public_vm-2" {
  ami = "ami-079db87dc4c10ac91" # Original template
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.public_subnet.id
  associate_public_ip_address = true
  key_name                    = data.aws_key_pair.key.key_name

  root_block_device {
    volume_size = "8"
    volume_type = "gp2"
  }

  tags = {
    Name        = "vm_public-1"
    Terraform   = "true"
    Environment = "production"
  }

  vpc_security_group_ids = [
    aws_security_group.infra_sec_group.id
  ]

  user_data = file("./scripts/entrypoint.sh")
  
}