from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in vueapp/__init__.py
from vueapp import __version__ as version

setup(
	name="vueapp",
	version=version,
	description="vue app",
	author="karthik",
	author_email="karthikeyan.av98@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
