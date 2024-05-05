# Reporting a Vulnerability

To report a vulnerability, please [create issue](https://github.com/azabroflovski/tiny-dialogue/issues/new)

While the discovery of new vulnerabilities is rare, we also recommend always using the latest versions 
of `tiny-dialogue` and its official companion libraries to ensure your application remains as secure as possible.

Please note that we do not consider XSS via template expressions a valid attack vector, because 
it can only happen if the user intentionally uses untrusted content as template compilation source. 
This is similar to knowingly pasting untrusted scripts into a browser console. We explicitly warn users 
against using untrusted content as template compilation source in our documentation.
