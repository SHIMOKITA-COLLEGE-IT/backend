import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateWithoutProfileInput } from './my-roots-create-without-profile.input';
import { Type } from 'class-transformer';
import { MyRootsCreateOrConnectWithoutProfileInput } from './my-roots-create-or-connect-without-profile.input';
import { MyRootsCreateManyProfileInputEnvelope } from './my-roots-create-many-profile-input-envelope.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';

@InputType()
export class MyRootsUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [MyRootsCreateWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsCreateWithoutProfileInput)
    create?: Array<MyRootsCreateWithoutProfileInput>;

    @Field(() => [MyRootsCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<MyRootsCreateOrConnectWithoutProfileInput>;

    @Field(() => MyRootsCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => MyRootsCreateManyProfileInputEnvelope)
    createMany?: MyRootsCreateManyProfileInputEnvelope;

    @Field(() => [MyRootsWhereUniqueInput], {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    connect?: Array<MyRootsWhereUniqueInput>;
}
