window.TF_PLAN = {"format_version":"1.2","terraform_version":"1.6.6","variables":{"all_ip":{"value":"0.0.0.0/0"},"default_zone":{"value":"us-east-1"},"private_subnet_cidr":{"value":"10.0.2.0/24"},"public_subnet_cidr":{"value":"10.0.1.0/24"},"subnets":{"value":["10.0.1.0/24","10.0.2.0/24"]},"virginia_cidr":{"value":"10.0.0.0/16"}},"planned_values":{"outputs":{"ec2_public_ip":{"sensitive":false},"ec2_public_user_data":{"sensitive":false}},"root_module":{"resources":[{"address":"aws_default_route_table.main_vpc_default","mode":"managed","type":"aws_default_route_table","name":"main_vpc_default","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":0,"values":{"propagating_vgws":null,"route":[{"cidr_block":"0.0.0.0/0","core_network_arn":"","destination_prefix_list_id":"","egress_only_gateway_id":"","instance_id":"","ipv6_cidr_block":"","nat_gateway_id":"","network_interface_id":"","transit_gateway_id":"","vpc_endpoint_id":"","vpc_peering_connection_id":""}],"tags":null,"timeouts":null},"sensitive_values":{"route":[{}],"tags_all":{}}},{"address":"aws_instance.private_vm_1","mode":"managed","type":"aws_instance","name":"private_vm_1","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"ami":"ami-079db87dc4c10ac91","associate_public_ip_address":false,"credit_specification":[],"get_password_data":false,"hibernation":null,"instance_type":"t2.micro","key_name":"production_ssh_key","launch_template":[],"root_block_device":[{"delete_on_termination":true,"tags":null,"volume_size":8,"volume_type":"gp2"}],"source_dest_check":true,"tags":{"Environment":"production","Name":"vm_private-1","Terraform":"true"},"tags_all":{"Environment":"production","Name":"vm_private-1","Terraform":"true"},"timeouts":null,"user_data_replace_on_change":false,"volume_tags":null},"sensitive_values":{"capacity_reservation_specification":[],"cpu_options":[],"credit_specification":[],"ebs_block_device":[],"enclave_options":[],"ephemeral_block_device":[],"instance_market_options":[],"ipv6_addresses":[],"launch_template":[],"maintenance_options":[],"metadata_options":[],"network_interface":[],"private_dns_name_options":[],"root_block_device":[{}],"secondary_private_ips":[],"security_groups":[],"tags":{},"tags_all":{},"vpc_security_group_ids":[]}},{"address":"aws_instance.public_vm-2","mode":"managed","type":"aws_instance","name":"public_vm-2","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"ami":"ami-079db87dc4c10ac91","associate_public_ip_address":true,"credit_specification":[],"get_password_data":false,"hibernation":null,"instance_type":"t2.micro","key_name":"production_ssh_key","launch_template":[],"root_block_device":[{"delete_on_termination":true,"tags":null,"volume_size":8,"volume_type":"gp2"}],"source_dest_check":true,"tags":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"tags_all":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"timeouts":null,"user_data":"42e87cab184420bfd4fa90e81757c5b9b78b766f","user_data_replace_on_change":false,"volume_tags":null},"sensitive_values":{"capacity_reservation_specification":[],"cpu_options":[],"credit_specification":[],"ebs_block_device":[],"enclave_options":[],"ephemeral_block_device":[],"instance_market_options":[],"ipv6_addresses":[],"launch_template":[],"maintenance_options":[],"metadata_options":[],"network_interface":[],"private_dns_name_options":[],"root_block_device":[{}],"secondary_private_ips":[],"security_groups":[],"tags":{},"tags_all":{},"vpc_security_group_ids":[]}},{"address":"aws_instance.public_vm_1","mode":"managed","type":"aws_instance","name":"public_vm_1","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"ami":"ami-079db87dc4c10ac91","associate_public_ip_address":true,"credit_specification":[],"get_password_data":false,"hibernation":null,"instance_type":"t2.micro","key_name":"production_ssh_key","launch_template":[],"root_block_device":[{"delete_on_termination":true,"tags":null,"volume_size":8,"volume_type":"gp2"}],"source_dest_check":true,"tags":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"tags_all":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"timeouts":null,"user_data_replace_on_change":false,"volume_tags":null},"sensitive_values":{"capacity_reservation_specification":[],"cpu_options":[],"credit_specification":[],"ebs_block_device":[],"enclave_options":[],"ephemeral_block_device":[],"instance_market_options":[],"ipv6_addresses":[],"launch_template":[],"maintenance_options":[],"metadata_options":[],"network_interface":[],"private_dns_name_options":[],"root_block_device":[{}],"secondary_private_ips":[],"security_groups":[],"tags":{},"tags_all":{},"vpc_security_group_ids":[]}},{"address":"aws_internet_gateway.igw_infra","mode":"managed","type":"aws_internet_gateway","name":"igw_infra","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":0,"values":{"tags":{"Environment":"dev","Name":"igw-general","Terraform":"true"},"tags_all":{"Environment":"dev","Name":"igw-general","Terraform":"true"},"timeouts":null},"sensitive_values":{"tags":{},"tags_all":{}}},{"address":"aws_s3_bucket.proveedores","mode":"managed","type":"aws_s3_bucket","name":"proveedores","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":0,"values":{"bucket":"terraform-proveedores-providres","force_destroy":false,"tags":{"Environment":"Dev","Name":"Terraform-1","Team":"DevOps","createdat":"2022-10-10","createdby":"Jose","deletedat":"2022-10-10","deletedby":"Jose","managedby":"Terraform","owner":"Jose","purpose":"Proveedores","updatedat":"2022-10-10","updatedby":"Jose"},"tags_all":{"Environment":"Dev","Name":"Terraform-1","Team":"DevOps","createdat":"2022-10-10","createdby":"Jose","deletedat":"2022-10-10","deletedby":"Jose","managedby":"Terraform","owner":"Jose","purpose":"Proveedores","updatedat":"2022-10-10","updatedby":"Jose"},"timeouts":null},"sensitive_values":{"cors_rule":[],"grant":[],"lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"replication_configuration":[],"server_side_encryption_configuration":[],"tags":{},"tags_all":{},"versioning":[],"website":[]}},{"address":"aws_security_group.infra_sec_group","mode":"managed","type":"aws_security_group","name":"infra_sec_group","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"description":"Managed by Terraform","egress":[{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":0,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"-1","security_groups":[],"self":false,"to_port":0}],"ingress":[{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":22,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":22},{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":443,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":443},{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":8080,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":8080},{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":80,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":80}],"revoke_rules_on_delete":false,"tags":{"Environment":"Dev","Name":"sec-group-1","Terraform":"True"},"tags_all":{"Environment":"Dev","Name":"sec-group-1","Terraform":"True"},"timeouts":null},"sensitive_values":{"egress":[{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]}],"ingress":[{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]}],"tags":{},"tags_all":{}}},{"address":"aws_subnet.private_subnet","mode":"managed","type":"aws_subnet","name":"private_subnet","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"assign_ipv6_address_on_creation":false,"cidr_block":"10.0.2.0/24","customer_owned_ipv4_pool":null,"enable_dns64":false,"enable_lni_at_device_index":null,"enable_resource_name_dns_a_record_on_launch":false,"enable_resource_name_dns_aaaa_record_on_launch":false,"ipv6_cidr_block":null,"ipv6_native":false,"map_customer_owned_ip_on_launch":null,"map_public_ip_on_launch":false,"outpost_arn":null,"tags":{"Access":"private","Environment":"dev","Location":"Virginia","Name":"private_subnet","Terraform":"true","Type":"private","Visibility":"private"},"tags_all":{"Access":"private","Environment":"dev","Location":"Virginia","Name":"private_subnet","Terraform":"true","Type":"private","Visibility":"private"},"timeouts":null},"sensitive_values":{"tags":{},"tags_all":{}}},{"address":"aws_subnet.public_subnet","mode":"managed","type":"aws_subnet","name":"public_subnet","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"assign_ipv6_address_on_creation":false,"cidr_block":"10.0.1.0/24","customer_owned_ipv4_pool":null,"enable_dns64":false,"enable_lni_at_device_index":null,"enable_resource_name_dns_a_record_on_launch":false,"enable_resource_name_dns_aaaa_record_on_launch":false,"ipv6_cidr_block":null,"ipv6_native":false,"map_customer_owned_ip_on_launch":null,"map_public_ip_on_launch":true,"outpost_arn":null,"tags":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"public_subnet","Terraform":"true","Type":"public","Visibility":"public"},"tags_all":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"public_subnet","Terraform":"true","Type":"public","Visibility":"public"},"timeouts":null},"sensitive_values":{"tags":{},"tags_all":{}}},{"address":"aws_vpc.main","mode":"managed","type":"aws_vpc","name":"main","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":1,"values":{"assign_generated_ipv6_cidr_block":null,"cidr_block":"10.0.0.0/16","enable_dns_support":true,"instance_tenancy":"default","ipv4_ipam_pool_id":null,"ipv4_netmask_length":null,"ipv6_ipam_pool_id":null,"ipv6_netmask_length":null,"tags":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"main","Terraform":"true","Type":"public","Visibility":"public"},"tags_all":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"main","Terraform":"true","Type":"public","Visibility":"public"}},"sensitive_values":{"cidr_block":true,"tags":{},"tags_all":{}}}]}},"resource_changes":[{"address":"aws_default_route_table.main_vpc_default","mode":"managed","type":"aws_default_route_table","name":"main_vpc_default","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"propagating_vgws":null,"route":[{"cidr_block":"0.0.0.0/0","core_network_arn":"","destination_prefix_list_id":"","egress_only_gateway_id":"","instance_id":"","ipv6_cidr_block":"","nat_gateway_id":"","network_interface_id":"","transit_gateway_id":"","vpc_endpoint_id":"","vpc_peering_connection_id":""}],"tags":null,"timeouts":null},"after_unknown":{"arn":true,"default_route_table_id":true,"id":true,"owner_id":true,"route":[{"gateway_id":true}],"tags_all":true,"vpc_id":true},"before_sensitive":false,"after_sensitive":{"route":[{}],"tags_all":{}}}},{"address":"aws_instance.private_vm_1","mode":"managed","type":"aws_instance","name":"private_vm_1","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"ami":"ami-079db87dc4c10ac91","associate_public_ip_address":false,"credit_specification":[],"get_password_data":false,"hibernation":null,"instance_type":"t2.micro","key_name":"production_ssh_key","launch_template":[],"root_block_device":[{"delete_on_termination":true,"tags":null,"volume_size":8,"volume_type":"gp2"}],"source_dest_check":true,"tags":{"Environment":"production","Name":"vm_private-1","Terraform":"true"},"tags_all":{"Environment":"production","Name":"vm_private-1","Terraform":"true"},"timeouts":null,"user_data_replace_on_change":false,"volume_tags":null},"after_unknown":{"arn":true,"availability_zone":true,"capacity_reservation_specification":true,"cpu_core_count":true,"cpu_options":true,"cpu_threads_per_core":true,"credit_specification":[],"disable_api_stop":true,"disable_api_termination":true,"ebs_block_device":true,"ebs_optimized":true,"enclave_options":true,"ephemeral_block_device":true,"host_id":true,"host_resource_group_arn":true,"iam_instance_profile":true,"id":true,"instance_initiated_shutdown_behavior":true,"instance_lifecycle":true,"instance_market_options":true,"instance_state":true,"ipv6_address_count":true,"ipv6_addresses":true,"launch_template":[],"maintenance_options":true,"metadata_options":true,"monitoring":true,"network_interface":true,"outpost_arn":true,"password_data":true,"placement_group":true,"placement_partition_number":true,"primary_network_interface_id":true,"private_dns":true,"private_dns_name_options":true,"private_ip":true,"public_dns":true,"public_ip":true,"root_block_device":[{"device_name":true,"encrypted":true,"iops":true,"kms_key_id":true,"throughput":true,"volume_id":true}],"secondary_private_ips":true,"security_groups":true,"spot_instance_request_id":true,"subnet_id":true,"tags":{},"tags_all":{},"tenancy":true,"user_data":true,"user_data_base64":true,"vpc_security_group_ids":true},"before_sensitive":false,"after_sensitive":{"capacity_reservation_specification":[],"cpu_options":[],"credit_specification":[],"ebs_block_device":[],"enclave_options":[],"ephemeral_block_device":[],"instance_market_options":[],"ipv6_addresses":[],"launch_template":[],"maintenance_options":[],"metadata_options":[],"network_interface":[],"private_dns_name_options":[],"root_block_device":[{}],"secondary_private_ips":[],"security_groups":[],"tags":{},"tags_all":{},"vpc_security_group_ids":[]}}},{"address":"aws_instance.public_vm-2","mode":"managed","type":"aws_instance","name":"public_vm-2","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"ami":"ami-079db87dc4c10ac91","associate_public_ip_address":true,"credit_specification":[],"get_password_data":false,"hibernation":null,"instance_type":"t2.micro","key_name":"production_ssh_key","launch_template":[],"root_block_device":[{"delete_on_termination":true,"tags":null,"volume_size":8,"volume_type":"gp2"}],"source_dest_check":true,"tags":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"tags_all":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"timeouts":null,"user_data":"42e87cab184420bfd4fa90e81757c5b9b78b766f","user_data_replace_on_change":false,"volume_tags":null},"after_unknown":{"arn":true,"availability_zone":true,"capacity_reservation_specification":true,"cpu_core_count":true,"cpu_options":true,"cpu_threads_per_core":true,"credit_specification":[],"disable_api_stop":true,"disable_api_termination":true,"ebs_block_device":true,"ebs_optimized":true,"enclave_options":true,"ephemeral_block_device":true,"host_id":true,"host_resource_group_arn":true,"iam_instance_profile":true,"id":true,"instance_initiated_shutdown_behavior":true,"instance_lifecycle":true,"instance_market_options":true,"instance_state":true,"ipv6_address_count":true,"ipv6_addresses":true,"launch_template":[],"maintenance_options":true,"metadata_options":true,"monitoring":true,"network_interface":true,"outpost_arn":true,"password_data":true,"placement_group":true,"placement_partition_number":true,"primary_network_interface_id":true,"private_dns":true,"private_dns_name_options":true,"private_ip":true,"public_dns":true,"public_ip":true,"root_block_device":[{"device_name":true,"encrypted":true,"iops":true,"kms_key_id":true,"throughput":true,"volume_id":true}],"secondary_private_ips":true,"security_groups":true,"spot_instance_request_id":true,"subnet_id":true,"tags":{},"tags_all":{},"tenancy":true,"user_data_base64":true,"vpc_security_group_ids":true},"before_sensitive":false,"after_sensitive":{"capacity_reservation_specification":[],"cpu_options":[],"credit_specification":[],"ebs_block_device":[],"enclave_options":[],"ephemeral_block_device":[],"instance_market_options":[],"ipv6_addresses":[],"launch_template":[],"maintenance_options":[],"metadata_options":[],"network_interface":[],"private_dns_name_options":[],"root_block_device":[{}],"secondary_private_ips":[],"security_groups":[],"tags":{},"tags_all":{},"vpc_security_group_ids":[]}}},{"address":"aws_instance.public_vm_1","mode":"managed","type":"aws_instance","name":"public_vm_1","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"ami":"ami-079db87dc4c10ac91","associate_public_ip_address":true,"credit_specification":[],"get_password_data":false,"hibernation":null,"instance_type":"t2.micro","key_name":"production_ssh_key","launch_template":[],"root_block_device":[{"delete_on_termination":true,"tags":null,"volume_size":8,"volume_type":"gp2"}],"source_dest_check":true,"tags":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"tags_all":{"Environment":"production","Name":"vm_public-1","Terraform":"true"},"timeouts":null,"user_data_replace_on_change":false,"volume_tags":null},"after_unknown":{"arn":true,"availability_zone":true,"capacity_reservation_specification":true,"cpu_core_count":true,"cpu_options":true,"cpu_threads_per_core":true,"credit_specification":[],"disable_api_stop":true,"disable_api_termination":true,"ebs_block_device":true,"ebs_optimized":true,"enclave_options":true,"ephemeral_block_device":true,"host_id":true,"host_resource_group_arn":true,"iam_instance_profile":true,"id":true,"instance_initiated_shutdown_behavior":true,"instance_lifecycle":true,"instance_market_options":true,"instance_state":true,"ipv6_address_count":true,"ipv6_addresses":true,"launch_template":[],"maintenance_options":true,"metadata_options":true,"monitoring":true,"network_interface":true,"outpost_arn":true,"password_data":true,"placement_group":true,"placement_partition_number":true,"primary_network_interface_id":true,"private_dns":true,"private_dns_name_options":true,"private_ip":true,"public_dns":true,"public_ip":true,"root_block_device":[{"device_name":true,"encrypted":true,"iops":true,"kms_key_id":true,"throughput":true,"volume_id":true}],"secondary_private_ips":true,"security_groups":true,"spot_instance_request_id":true,"subnet_id":true,"tags":{},"tags_all":{},"tenancy":true,"user_data":true,"user_data_base64":true,"vpc_security_group_ids":true},"before_sensitive":false,"after_sensitive":{"capacity_reservation_specification":[],"cpu_options":[],"credit_specification":[],"ebs_block_device":[],"enclave_options":[],"ephemeral_block_device":[],"instance_market_options":[],"ipv6_addresses":[],"launch_template":[],"maintenance_options":[],"metadata_options":[],"network_interface":[],"private_dns_name_options":[],"root_block_device":[{}],"secondary_private_ips":[],"security_groups":[],"tags":{},"tags_all":{},"vpc_security_group_ids":[]}}},{"address":"aws_internet_gateway.igw_infra","mode":"managed","type":"aws_internet_gateway","name":"igw_infra","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"tags":{"Environment":"dev","Name":"igw-general","Terraform":"true"},"tags_all":{"Environment":"dev","Name":"igw-general","Terraform":"true"},"timeouts":null},"after_unknown":{"arn":true,"id":true,"owner_id":true,"tags":{},"tags_all":{},"vpc_id":true},"before_sensitive":false,"after_sensitive":{"tags":{},"tags_all":{}}}},{"address":"aws_s3_bucket.proveedores","mode":"managed","type":"aws_s3_bucket","name":"proveedores","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"bucket":"terraform-proveedores-providres","force_destroy":false,"tags":{"Environment":"Dev","Name":"Terraform-1","Team":"DevOps","createdat":"2022-10-10","createdby":"Jose","deletedat":"2022-10-10","deletedby":"Jose","managedby":"Terraform","owner":"Jose","purpose":"Proveedores","updatedat":"2022-10-10","updatedby":"Jose"},"tags_all":{"Environment":"Dev","Name":"Terraform-1","Team":"DevOps","createdat":"2022-10-10","createdby":"Jose","deletedat":"2022-10-10","deletedby":"Jose","managedby":"Terraform","owner":"Jose","purpose":"Proveedores","updatedat":"2022-10-10","updatedby":"Jose"},"timeouts":null},"after_unknown":{"acceleration_status":true,"acl":true,"arn":true,"bucket_domain_name":true,"bucket_prefix":true,"bucket_regional_domain_name":true,"cors_rule":true,"grant":true,"hosted_zone_id":true,"id":true,"lifecycle_rule":true,"logging":true,"object_lock_configuration":true,"object_lock_enabled":true,"policy":true,"region":true,"replication_configuration":true,"request_payer":true,"server_side_encryption_configuration":true,"tags":{},"tags_all":{},"versioning":true,"website":true,"website_domain":true,"website_endpoint":true},"before_sensitive":false,"after_sensitive":{"cors_rule":[],"grant":[],"lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"replication_configuration":[],"server_side_encryption_configuration":[],"tags":{},"tags_all":{},"versioning":[],"website":[]}}},{"address":"aws_security_group.infra_sec_group","mode":"managed","type":"aws_security_group","name":"infra_sec_group","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"description":"Managed by Terraform","egress":[{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":0,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"-1","security_groups":[],"self":false,"to_port":0}],"ingress":[{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":22,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":22},{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":443,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":443},{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":8080,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":8080},{"cidr_blocks":["0.0.0.0/0"],"description":"","from_port":80,"ipv6_cidr_blocks":[],"prefix_list_ids":[],"protocol":"tcp","security_groups":[],"self":false,"to_port":80}],"revoke_rules_on_delete":false,"tags":{"Environment":"Dev","Name":"sec-group-1","Terraform":"True"},"tags_all":{"Environment":"Dev","Name":"sec-group-1","Terraform":"True"},"timeouts":null},"after_unknown":{"arn":true,"egress":[{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]}],"id":true,"ingress":[{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]}],"name":true,"name_prefix":true,"owner_id":true,"tags":{},"tags_all":{},"vpc_id":true},"before_sensitive":false,"after_sensitive":{"egress":[{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]}],"ingress":[{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]},{"cidr_blocks":[false],"ipv6_cidr_blocks":[],"prefix_list_ids":[],"security_groups":[]}],"tags":{},"tags_all":{}}}},{"address":"aws_subnet.private_subnet","mode":"managed","type":"aws_subnet","name":"private_subnet","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"assign_ipv6_address_on_creation":false,"cidr_block":"10.0.2.0/24","customer_owned_ipv4_pool":null,"enable_dns64":false,"enable_lni_at_device_index":null,"enable_resource_name_dns_a_record_on_launch":false,"enable_resource_name_dns_aaaa_record_on_launch":false,"ipv6_cidr_block":null,"ipv6_native":false,"map_customer_owned_ip_on_launch":null,"map_public_ip_on_launch":false,"outpost_arn":null,"tags":{"Access":"private","Environment":"dev","Location":"Virginia","Name":"private_subnet","Terraform":"true","Type":"private","Visibility":"private"},"tags_all":{"Access":"private","Environment":"dev","Location":"Virginia","Name":"private_subnet","Terraform":"true","Type":"private","Visibility":"private"},"timeouts":null},"after_unknown":{"arn":true,"availability_zone":true,"availability_zone_id":true,"id":true,"ipv6_cidr_block_association_id":true,"owner_id":true,"private_dns_hostname_type_on_launch":true,"tags":{},"tags_all":{},"vpc_id":true},"before_sensitive":false,"after_sensitive":{"tags":{},"tags_all":{}}}},{"address":"aws_subnet.public_subnet","mode":"managed","type":"aws_subnet","name":"public_subnet","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"assign_ipv6_address_on_creation":false,"cidr_block":"10.0.1.0/24","customer_owned_ipv4_pool":null,"enable_dns64":false,"enable_lni_at_device_index":null,"enable_resource_name_dns_a_record_on_launch":false,"enable_resource_name_dns_aaaa_record_on_launch":false,"ipv6_cidr_block":null,"ipv6_native":false,"map_customer_owned_ip_on_launch":null,"map_public_ip_on_launch":true,"outpost_arn":null,"tags":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"public_subnet","Terraform":"true","Type":"public","Visibility":"public"},"tags_all":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"public_subnet","Terraform":"true","Type":"public","Visibility":"public"},"timeouts":null},"after_unknown":{"arn":true,"availability_zone":true,"availability_zone_id":true,"id":true,"ipv6_cidr_block_association_id":true,"owner_id":true,"private_dns_hostname_type_on_launch":true,"tags":{},"tags_all":{},"vpc_id":true},"before_sensitive":false,"after_sensitive":{"tags":{},"tags_all":{}}}},{"address":"aws_vpc.main","mode":"managed","type":"aws_vpc","name":"main","provider_name":"registry.terraform.io/hashicorp/aws","change":{"actions":["create"],"before":null,"after":{"assign_generated_ipv6_cidr_block":null,"cidr_block":"10.0.0.0/16","enable_dns_support":true,"instance_tenancy":"default","ipv4_ipam_pool_id":null,"ipv4_netmask_length":null,"ipv6_ipam_pool_id":null,"ipv6_netmask_length":null,"tags":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"main","Terraform":"true","Type":"public","Visibility":"public"},"tags_all":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"main","Terraform":"true","Type":"public","Visibility":"public"}},"after_unknown":{"arn":true,"default_network_acl_id":true,"default_route_table_id":true,"default_security_group_id":true,"dhcp_options_id":true,"enable_dns_hostnames":true,"enable_network_address_usage_metrics":true,"id":true,"ipv6_association_id":true,"ipv6_cidr_block":true,"ipv6_cidr_block_network_border_group":true,"main_route_table_id":true,"owner_id":true,"tags":{},"tags_all":{}},"before_sensitive":false,"after_sensitive":{"cidr_block":true,"tags":{},"tags_all":{}}}}],"output_changes":{"ec2_public_ip":{"actions":["create"],"before":null,"after_unknown":true,"before_sensitive":false,"after_sensitive":false},"ec2_public_user_data":{"actions":["create"],"before":null,"after_unknown":true,"before_sensitive":false,"after_sensitive":false}},"prior_state":{"format_version":"1.0","terraform_version":"1.6.6","values":{"root_module":{"resources":[{"address":"data.aws_key_pair.key","mode":"data","type":"aws_key_pair","name":"key","provider_name":"registry.terraform.io/hashicorp/aws","schema_version":0,"values":{"arn":"arn:aws:ec2:us-east-1:983829984614:key-pair/production_ssh_key","create_time":"2023-12-26T00:54:32Z","filter":null,"fingerprint":"49:5c:62:34:b4:75:f2:f0:21:b7:43:ec:91:4e:fc:dc:fb:fc:00:bf","id":"key-0620c4d77552f06de","include_public_key":false,"key_name":"production_ssh_key","key_pair_id":"key-0620c4d77552f06de","key_type":"rsa","public_key":"","tags":{"name":"terraform","type":"prod_key"},"timeouts":null},"sensitive_values":{"tags":{}}}]}}},"configuration":{"provider_config":{"aws":{"name":"aws","full_name":"registry.terraform.io/hashicorp/aws","version_constraint":"~\u003e 5.0","expressions":{"region":{"references":["var.default_zone"]}}}},"root_module":{"outputs":{"ec2_public_ip":{"expression":{"references":["aws_instance.public_vm_1.public_ip","aws_instance.public_vm_1"]},"description":"IP publica de la instancia Ec2"},"ec2_public_user_data":{"expression":{"references":["aws_instance.public_vm-2.public_ip","aws_instance.public_vm-2"]},"description":"IP publica de la instancia Ec2 haciendo uso de user_data"}},"resources":[{"address":"aws_default_route_table.main_vpc_default","mode":"managed","type":"aws_default_route_table","name":"main_vpc_default","provider_config_key":"aws","expressions":{"default_route_table_id":{"references":["aws_vpc.main.default_route_table_id","aws_vpc.main"]},"route":{"references":["aws_internet_gateway.igw_infra.id","aws_internet_gateway.igw_infra"]}},"schema_version":0},{"address":"aws_instance.private_vm_1","mode":"managed","type":"aws_instance","name":"private_vm_1","provider_config_key":"aws","provisioners":[{"type":"local-exec","expressions":{"command":{"references":["aws_instance.private_vm_1.private_ip","aws_instance.private_vm_1"]}}}],"expressions":{"ami":{"constant_value":"ami-079db87dc4c10ac91"},"associate_public_ip_address":{"constant_value":false},"instance_type":{"constant_value":"t2.micro"},"key_name":{"references":["data.aws_key_pair.key.key_name","data.aws_key_pair.key"]},"root_block_device":[{"volume_size":{"constant_value":"8"},"volume_type":{"constant_value":"gp2"}}],"subnet_id":{"references":["aws_subnet.public_subnet.id","aws_subnet.public_subnet"]},"tags":{"constant_value":{"Environment":"production","Name":"vm_private-1","Terraform":"true"}},"vpc_security_group_ids":{"references":["aws_security_group.infra_sec_group.id","aws_security_group.infra_sec_group"]}},"schema_version":1},{"address":"aws_instance.public_vm-2","mode":"managed","type":"aws_instance","name":"public_vm-2","provider_config_key":"aws","expressions":{"ami":{"constant_value":"ami-079db87dc4c10ac91"},"associate_public_ip_address":{"constant_value":true},"instance_type":{"constant_value":"t2.micro"},"key_name":{"references":["data.aws_key_pair.key.key_name","data.aws_key_pair.key"]},"root_block_device":[{"volume_size":{"constant_value":"8"},"volume_type":{"constant_value":"gp2"}}],"subnet_id":{"references":["aws_subnet.public_subnet.id","aws_subnet.public_subnet"]},"tags":{"constant_value":{"Environment":"production","Name":"vm_public-1","Terraform":"true"}},"user_data":{},"vpc_security_group_ids":{"references":["aws_security_group.infra_sec_group.id","aws_security_group.infra_sec_group"]}},"schema_version":1},{"address":"aws_instance.public_vm_1","mode":"managed","type":"aws_instance","name":"public_vm_1","provider_config_key":"aws","provisioners":[{"type":"local-exec","expressions":{"command":{"references":["aws_instance.public_vm_1.public_ip","aws_instance.public_vm_1"]}}},{"type":"remote-exec","expressions":{"inline":{"constant_value":["sudo yum install nmap -y"]}}}],"expressions":{"ami":{"constant_value":"ami-079db87dc4c10ac91"},"associate_public_ip_address":{"constant_value":true},"instance_type":{"constant_value":"t2.micro"},"key_name":{"references":["data.aws_key_pair.key.key_name","data.aws_key_pair.key"]},"root_block_device":[{"volume_size":{"constant_value":"8"},"volume_type":{"constant_value":"gp2"}}],"subnet_id":{"references":["aws_subnet.public_subnet.id","aws_subnet.public_subnet"]},"tags":{"constant_value":{"Environment":"production","Name":"vm_public-1","Terraform":"true"}},"vpc_security_group_ids":{"references":["aws_security_group.infra_sec_group.id","aws_security_group.infra_sec_group"]}},"schema_version":1},{"address":"aws_internet_gateway.igw_infra","mode":"managed","type":"aws_internet_gateway","name":"igw_infra","provider_config_key":"aws","expressions":{"tags":{"constant_value":{"Environment":"dev","Name":"igw-general","Terraform":"true"}},"vpc_id":{"references":["aws_vpc.main.id","aws_vpc.main"]}},"schema_version":0},{"address":"aws_s3_bucket.proveedores","mode":"managed","type":"aws_s3_bucket","name":"proveedores","provider_config_key":"aws","expressions":{"bucket":{"constant_value":"terraform-proveedores-providres"},"tags":{"constant_value":{"Environment":"Dev","Name":"Terraform-1","Team":"DevOps","createdat":"2022-10-10","createdby":"Jose","deletedat":"2022-10-10","deletedby":"Jose","managedby":"Terraform","owner":"Jose","purpose":"Proveedores","updatedat":"2022-10-10","updatedby":"Jose"}}},"schema_version":0},{"address":"aws_security_group.infra_sec_group","mode":"managed","type":"aws_security_group","name":"infra_sec_group","provider_config_key":"aws","expressions":{"egress":{"references":["var.all_ip"]},"ingress":{"references":["var.all_ip","var.all_ip","var.all_ip","var.all_ip"]},"tags":{"constant_value":{"Environment":"Dev","Name":"sec-group-1","Terraform":"True"}},"vpc_id":{"references":["aws_vpc.main.id","aws_vpc.main"]}},"schema_version":1},{"address":"aws_subnet.private_subnet","mode":"managed","type":"aws_subnet","name":"private_subnet","provider_config_key":"aws","expressions":{"cidr_block":{"references":["var.subnets[1]","var.subnets"]},"tags":{"constant_value":{"Access":"private","Environment":"dev","Location":"Virginia","Name":"private_subnet","Terraform":true,"Type":"private","Visibility":"private"}},"vpc_id":{"references":["aws_vpc.main.id","aws_vpc.main"]}},"schema_version":1,"depends_on":["aws_vpc.main"]},{"address":"aws_subnet.public_subnet","mode":"managed","type":"aws_subnet","name":"public_subnet","provider_config_key":"aws","expressions":{"cidr_block":{"references":["var.subnets[0]","var.subnets"]},"map_public_ip_on_launch":{"constant_value":true},"tags":{"constant_value":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"public_subnet","Terraform":true,"Type":"public","Visibility":"public"}},"vpc_id":{"references":["aws_vpc.main.id","aws_vpc.main"]}},"schema_version":1,"depends_on":["aws_vpc.main"]},{"address":"aws_vpc.main","mode":"managed","type":"aws_vpc","name":"main","provider_config_key":"aws","expressions":{"cidr_block":{"references":["var.virginia_cidr"]},"tags":{"constant_value":{"Access":"public","Environment":"dev","Location":"Virginia","Name":"main","Terraform":true,"Type":"public","Visibility":"public"}}},"schema_version":1},{"address":"data.aws_key_pair.key","mode":"data","type":"aws_key_pair","name":"key","provider_config_key":"aws","expressions":{"key_name":{"constant_value":"production_ssh_key"}},"schema_version":0}],"variables":{"all_ip":{"default":"0.0.0.0/0","description":"all ip"},"default_zone":{"default":"us-east-1","description":"zona por defecto"},"private_subnet_cidr":{"default":"10.0.2.0/24","description":"CIDR de la subnet2"},"public_subnet_cidr":{"default":"10.0.1.0/24","description":"CIDR de la subnet1"},"subnets":{"default":["10.0.1.0/24","10.0.2.0/24"],"description":"lista de subnets"},"virginia_cidr":{"default":"10.0.0.0/16","description":"CIDR de virginia","sensitive":true}}}},"relevant_attributes":[{"resource":"aws_vpc.main","attribute":["default_route_table_id"]},{"resource":"aws_internet_gateway.igw_infra","attribute":["id"]},{"resource":"aws_subnet.public_subnet","attribute":["id"]},{"resource":"aws_security_group.infra_sec_group","attribute":["id"]},{"resource":"data.aws_key_pair.key","attribute":["key_name"]},{"resource":"aws_instance.public_vm_1","attribute":["public_ip"]},{"resource":"aws_instance.public_vm-2","attribute":["public_ip"]},{"resource":"aws_vpc.main","attribute":["id"]}],"timestamp":"2023-12-27T22:26:09Z","errored":false}