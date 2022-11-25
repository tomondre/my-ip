terraform {
  cloud {
    organization = "raspberry-kubernetes-cluster"

    workspaces {
      tags = ["tomondre-my-ip"]
    }
  }
}

module "my_ip_api" {
  source            = "git::https://github.com/tomondre/raspberry-kubernetes-cluster.git//terraform-modules/reusable-modules/full-deployment"
  health_check_path = "/health"
  image_tag         = var.image_tag
  image_url         = "tomondre/my-ip-api"
  service_name      = "my-ip-api"
  port              = 8080
  env               = {
    ABSTRACT_API_KEY = var.lil_linko_abstract_api
    PORT             = 8080
  }
}

variable "image_tag" {}
variable "lil_linko_abstract_api" {}