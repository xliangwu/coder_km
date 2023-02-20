# 10.SpringBoot @ConditionalOnProperty和@ConditionalOnExpression

## @ConditionalOnProperty

>@ConditionalOnProperty的作用是判断一个Property属性，是否符合我们的条件，符合则让该注解修饰的类或者方法生效，否则不生效.

我们在Spring Boot中可以通过@ConditionalOnProperty来控制Configuration配置类是否生效

通过@ConditionalOnProperty的两个属性name以及havingValue来实现，其中name用来从application.properties中读取某个属性值。
如果该值为空，则直接返回false，不让配置类生效。如果值不为空，则将该值与havingValue指定的值进行比较，如果一样则返回true;否则返回false。

如果只使用@ConditionalOnProperty的name属性，那么当配置文件中只要出现xxx时(内容为空，同样也是有效的)，则该配置生效。

### ConditionalOnProperty源码
```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD })
@Documented
@Conditional(OnPropertyCondition.class)
public @interface ConditionalOnProperty {

	/**数组，获取对应property名称的值，与name不可同时使用。
	 * Alias for {@link #name()}.
	 * @return the names
	 */
	String[] value() default {};

	/**property名称的前缀，有时为了方便，可以使用该属性
	 * A prefix that should be applied to each property. The prefix automatically ends
	 * with a dot if not specified. A valid prefix is defined by one or more words
	 * separated with dots (e.g. {@code "acme.system.feature"}).
	 * @return the prefix
	 */
	String prefix() default "";

	/**数组，property完整名称或部分名称（可与prefix组合使用，组成完整的property名称），与value不可同时使用。
	 * The name of the properties to test. If a prefix has been defined, it is applied to
	 * compute the full key of each property. For instance if the prefix is
	 * {@code app.config} and one value is {@code my-value}, the full key would be
	 * {@code app.config.my-value}
	 * <p>
	 * Use the dashed notation to specify each property, that is all lower case with a "-"
	 * to separate words (e.g. {@code my-long-property}).
	 * @return the names
	 */
	String[] name() default {};

	/**可与name组合使用，比较获取到的属性值与havingValue给定的值是否相同，相同才加载配置。
	 * The string representation of the expected value for the properties. If not
	 * specified, the property must <strong>not</strong> be equal to {@code false}.
	 * @return the expected value
	 */
	String havingValue() default "";

	/**缺少该property时是否可以加载。如果为true，没有该property也会正常加载；反之报错
	 * Specify if the condition should match if the property is not set. Defaults to
	 * {@code false}.
	 * @return if should match if the property is missing
	 */
	boolean matchIfMissing() default false;

}
```

### 如何使用

1. 在配置文件添加一个属性，用来控制配置是否生效
```yaml
#是否开启配置文件
open.Configuration=true
```

2. 创建一个bean类
```java
@Data
public class Student {

    private String name;


    private String age;
}
```

3. 新建一个配置类，来控制bean的初始化
```java
@Configuration
@ConditionalOnProperty(name = "open.Configuration",havingValue = "true")
public class TestConfig {

    @Bean
    public Student student(){
        Student student=new Student();
        System.out.println("-------Student类初始化-------");
        return student;
    }

}
```


## @ConditionalOnExpression

ConditionalOnExpression的判断方式是里面的表达式，执行Spel表达式，根据返回的true/false来判断是否满足条件，满足表达式则生效，如我们上面的例子，可以改成以下的样子，功能是一样的

```java
@ConditionalOnExpression(" '${open.Configuration}'.equals('open')")

```

Spel表达式可以支持逻辑运算

```java
@ConditionalOnExpression(" ${open.Configuration}||${open.bean.config}")
```

### 源码和参数
```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD })
@Documented
@Conditional(OnExpressionCondition.class)
public @interface ConditionalOnExpression {

	/**
	 * The SpEL expression to evaluate. Expression should return {@code true} if the
	 * condition passes or {@code false} if it fails.
	 * @return the SpEL expression
	 */
	String value() default "true";

}
```

## 引用
- [Spring Boot学习](https://blog.csdn.net/qq_36551991/article/details/106961656)
- [springboot的@ConditionalOnClass注解](https://www.cnblogs.com/teach/p/16519087.html)
