# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "jasmine-sinon-rails"
  s.version = "1.3.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Mihai Tarnovan"]
  s.date = "2012-06-01"
  s.email = ["mihai.tarnovan@cubus.ro"]
  s.homepage = "https://github.com/mtarnovan/jasmine-sinon-rails"
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.16"
  s.summary = "jasmine-sinon.js matchers via Rails 3.1+ asset pipeline"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
