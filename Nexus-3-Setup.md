# Nexus Repository Manager 3 for Private NPM Repositories

The [Nexus Repository Manager 3](https://help.sonatype.com/display/NXRM3) is a full-featured repository for `npm` packages (as well as `Python`, `Docker`, `NuGet`, `Ruby` and others besides).  It can host private, scoped `npm` packages and serve as a proxy to the public `npm` repository.

This document describes server setup and client configuration steps required to implement the software.

## Server Setup

The first thing we need to do is install Nexus Repository Manager.  This process is reasonably simple and described in Sonatype's [installation instructions](https://help.sonatype.com/display/NXRM3/Installation).

### Create a Proxy for the Public NPM Repository
* Click the *Administration* button.
* Click the *Create repository* button and choose **npm (proxy)** from the list.
* Add the following text in the required fields:
	- *Name:* `npm-proxy`
	- *Remote Store URL:* `https://registry.npmjs.org/`
* Click **Create Repository**.
	
### Create a Hosted Repository
* Click the *Administration* button.
* Click the *Create repository* button and choose **npm (hosted)** from the list.
* Add the following text in the required fields:
	- *Name:* `npm-hosted`
	- *Blob store:* `default`
* Click **Create Repository**.
	
### Group the Proxy and Hosted Repository
* Click the *Administration* button.
* Click the *Create repository* button and choose **npm (group)** from the list.
* Add the following text in the required fields:
	- *Name:* `npm-all`
	- *Blob store:* `default`
* Add the `npm-proxy` and `npm-hosted` repositories as members of the group (in that order).
* Click **Create Repository**.

The client-side configuration will be a lot simpler if we group the proxy and hosted repositories.

> A repository group is the recommended way to expose all your npm registries repositories from the repository manager to your users, without needing any further client side configuration. A repository group allows you to expose the aggregated content of multiple proxy and hosted repositories with one URL to npm and other tools.
>
> --<cite>[The Documentation](https://help.sonatype.com/display/NXRM3/Node+Packaged+Modules+and+npm+Registries#NodePackagedModulesandnpmRegistries-PrivatenpmRegistries)</cite>

	
You should now be able to use `https://server:port/repository/npm-proxy` as your default npm service.

### Add the `npm` Bearer Token Realm

To allow `npm` users to authenticate with bearker tokens when publishing, we must add the `npm` Bearer Token Realm.

* Click the *Administration* button.
* Go to **Security | Realms**
* Add *npm Bearer Token Realm* to the list of active realms.
* Click **Save**.


## Configure the Client

### Update `npm` (If Necessary)

If you have an old version of `npm`, you may need to [update it](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm).

### Configure `.npmrc`

Just to be on the safe side, before doing anything else in this section, back up your `.npmrc` file.

```bash
cp ~/.npmrc ~/.npmrc.bak
```

Edit your `./npmrc` file to include the following information:
* The URL of the repository.
* The base64 hash of your username and password.

#### What's the URL of the Repository?

For installing repositories, we'll use the *group* repository.  In doing so, `npm` will check the local repository first, then the public repository when looking for a module.

If you've been following this document, the URL should look like this:  http://server:port/repository/npm-all/

#### How Do I Get the base64 Hash?

You can generate the base64 hash of your username and password from the shell.

```bash
echo -n 'username:password' | openssl base64
```

#### Include Your Email

In addition to the repository and password hash, you'll need to add your email address to the `.npmrc` file.  That's information you should already have.  When you add it to the files, *don't forget to enclose it in angle brackets.*

#### *Now* We Can Modify the `.npmrc` File

Now we have enough information to populate the `.npmrc` file.

```
registry=the server URL
email=<you@yourdomain.com>
_auth=the base64 has
```

For example:

```
registry=http://server:port/repository/npm-all/
email=<you@yourdomain.com>
_auth=dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Publish Your `npm` Module

The `npm publish` command uses a registry configuration value to know where to publish your package. There are several ways to change the registry value to point at your hosted `npm` repository. 

Since the `.npmrc` file usually contains a registry value intended only for getting new packages, a simple way to override this value is to provide a registry to the `publish` command:

```bash
npm publish --registry http://<server>:<port>/repository/npm-hosted/
```

Alternatively, you can edit your `package.json` file and add a `publishConfig` section.

```javascript
"publishConfig" : {
  "registry" : "http://<server>:<port>/repository/npm-hosted/"
},
```
*Notice that you actually publish to the hosted repository (not the grouped repository).*

There is a good [blog post](http://blog.sonatype.com/using-nexus-3-as-your-repository-part-2-npm-packages) on this subject on the Sonatype website.


