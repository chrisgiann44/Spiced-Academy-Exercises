**_Open Bash and enter the following commands:_**

**sudo apt install postgresql**
This command installs Postgres.

**sudo service postgresql start**
This command starts Postgres. Remember it since you will have to
enter it again (for example, after you restart your computer).

**sudo su postgres**
This command logs you in as the user named postgres which was created
during installation.

**psql**
This command runs the Postgres command line interface. If you receive
an error because there is no database named postgres, type createdb postgres and try again.

**\password**
Enter "postgres" for the new password and then confirm.

**\q**
This command quits the Postgres command line interface.

**createuser -s funkychicken**
Replace "funkychicken" with your own Ubuntu username. The effect
of this command will be to create a Postgres user with the same name as you.

**exit**
This command makes you stop being the user named postgres. You will
go back to being yourself but now there is a Postgres user with your username.

**createdb funkychicken**
Replace "funkychicken" with your own Ubuntu username. The creates
a database with the same name as you. After you do this, you should
be able to type psql and launch the command-line interface for the
database with the same name as you.
